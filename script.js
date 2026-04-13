        // حل مشكلة تعليق الصور والربط بين الألوان والمعرض
        function updateMainDisplay(imagePath) {
            const mainImg = document.getElementById('mainDisplay');
            mainImg.classList.remove('fade-in');
            setTimeout(() => {
                mainImg.src = imagePath;
                mainImg.classList.add('fade-in');
            }, 50);
        }

        function updateView(el, src) {
            updateMainDisplay('images/' + src.split('/').pop());
            document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            el.classList.add('active');
        }

        function setColor(el, imageName) {
            updateMainDisplay('images/' + imageName);
            document.querySelectorAll('.color-opt').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            
            // تحديث المعرض الصغير ليكون متناسق مع اللون المختار
            const firstThumb = document.querySelector('.thumbnail-grid img:first-child');
            firstThumb.src = 'images/' + imageName;
            document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
            firstThumb.classList.add('active');
        }

        function setPrice(el, current, old) {
            document.getElementById('currentPrice').innerText = current;
            document.getElementById('oldPrice').innerText = old;
            document.querySelectorAll('.size-opt').forEach(b => b.classList.remove('active'));
            el.classList.add('active');
        }

        function sendWhatsApp() {
            const price = document.getElementById('currentPrice').innerText;
            const size = document.querySelector('.size-opt.active').innerText;
            const color = document.querySelector('.color-opt.active').getAttribute('title');
            
            const msg = `السلام عليكم، حابب أطلب عرض المنشر السحري:
- المقاس: ${size}
- اللون: ${color}
- السعر الحالي: ${price} جنيه (شامل الشحن والمشابك الهدية)
ممكن تفاصيل الاستلام؟`;
            window.open(`https://wa.me/201505545045?text=${encodeURIComponent(msg)}`, '_blank');
        }

        function toggleTheme() {
            const body = document.body;
            const icon = document.querySelector('#themeBtn i');
            if(body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                icon.className = 'fas fa-moon';
            } else {
                body.setAttribute('data-theme', 'dark');
                icon.className = 'fas fa-sun';
            }
        }

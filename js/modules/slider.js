function slider({containet, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
	    //slider
    const slides = document.querySelectorAll(slide),
        slider = document.querySelector(containet),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesFields = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;

    let sliderIndex = 1,
        offset = 0;
    slidesFields.style.width = 100 * slides.length + '%';
    slidesFields.style.display = 'flex';
    slidesFields.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];
    indicators.classList.add('carousele-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 20px;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = '1';
        }
        indicators.append(dot);
        dots.push(dot);
    }

    if (slides.length < 10 ) {
            total.textContent = `0${slides.length}`;
            current.textContent = `${sliderIndex}`;
        } else {
            total.textContent = slides.length;
            current.textContent = sliderIndex;
        }

    slides.forEach(slide => {
        slide.style.width = width;
    });

    next.addEventListener('click', () => {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }
        slidesFields.style.transform = `translateX(-${offset}px)`;

        if (sliderIndex == slides.length) {
            sliderIndex = 1;
        } else {
            sliderIndex++;
        };

        if (slides.length < 10) {
            current.textContent = `${sliderIndex}`;
        } else {
            current.textContent = sliderIndex;
        };
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[sliderIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= width.slice(0, width.length - 2);
        }
        slidesFields.style.transform = `translateX(-${offset}px)`;

        if (sliderIndex == 1) {
            sliderIndex = slides.length;
        } else {
            sliderIndex--;
        };

        if (slides.length < 10) {
            current.textContent = `${sliderIndex}`;
        } else {
            current.textContent = sliderIndex;
        };
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[sliderIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            sliderIndex  = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);
            slidesFields.style.transform = `translateX(-${offset}px)`;
            if (slides.length < 10) {
                current.textContent = `${sliderIndex}`;
            } else {
                current.textContent = sliderIndex;
        };
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[sliderIndex - 1].style.opacity = 1;
        });
    });
};

export default slider;
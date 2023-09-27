import { throttle } from 'lodash';

if (window.innerWidth > 1024) {
	document.querySelector('.banner').addEventListener('mousemove',
		throttle((event) => {
			const woman = document.querySelector('#banner_woman');
			const men = document.querySelector('#banner_men');
			const banner = document.querySelector('.banner');
			const bg = document.querySelector('#banner_bg');


			document.querySelectorAll('.parallax__item').forEach((elem) => {
				const x = Math.round(event.clientX / 70);
				const y = Math.round(event.clientY / 70);
				const rotate = Math.round(+elem.getAttribute('data-rotate') + (x + y) / 3);
				const elemTrs = Number(elem.getAttribute('data-translate'));
				const sElem = elem;

				woman.style.transform = `translateX(${(window.innerWidth - event.clientX) / 50}px) translateY(${(banner.offsetHeight - event.clientY) / 50
					}px)`;
				bg.style.transform = `translateX(${((window.innerWidth - 600 - event.clientX) / 100) * -1
					}px) translateY(${(banner.offsetHeight - 300 - event.clientY) / -35}px)`;

				sElem.style.transform = `translateX(${(window.innerWidth - 600 - event.clientX) / 20 - elemTrs
					}px) translateY(${(banner.offsetHeight - 300 - event.clientY) / (20 - elemTrs)
					}px) rotate(${rotate}deg)`;
			});
		}, 150)
	);
}





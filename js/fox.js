// More information about this technique/pen:
// https://medium.com/@electerious/parallax-scrolling-with-js-controlled-css-variables-63cfe96820c7#.o1kkd4cte

document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 2800,
		to: 4000,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`
			}
		}
	}).start()
		
})
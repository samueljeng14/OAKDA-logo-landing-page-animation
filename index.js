$(document).ready(function() {
	// console.log("test");

	// 點了飛走（一次性）
	$(".for_hover").click(function() {
		// console.log("test");

		// 保持旋轉並放大
		$(".chat").css({
			transitionDuration: '0.4s',
			transform: 'scale(1.2) rotate(45deg)',
			// transitionTimingFunction: 'cubic-bezier(0,-0.05,.25,1)'
		});
		$(".chat").removeClass('chat_hover');

		// 往左邊一一點
		// setTimeout(function () {
		// 	$(".chat").css({
		// 		transitionDuration: '0.5s',
		// 		transform: 'scale(1.2) translateX(-40px) rotate(45deg)'
		// 	});
		// });

		setTimeout(function () {
			// 泡泡往右
			$(".chat").css({
				transitionDuration: '0.8s',
				transform: 'scale(1.2) translateX(2000px) rotate(45deg)',
				transitionTimingFunction: 'cubic-bezier(.67,-0.26,.46,1)'
			});

			// 左邊蓋版
			$(".bgc").css('width', '100vw');
		}, 450);

		setTimeout(function () {
			// 文字出現
			$(".bgc span").css('opacity', '1');
		}, 1300);

		// 中間三條線消失

		$(".line").animate({opacity: 0}, 300);
	});

	// hover動作
	$(".for_hover").hover(function() {
		$(".chat_hover").css({
			transitionDuration: '0.3s',
			transitionProperty: 'transform',
			transform: 'rotate(45deg)'
		});
	}, function() {
		$(".chat_hover").css({
			transitionDuration: '0.3s',
			transitionProperty: 'transform',
			transform: 'rotate(0deg)'
		});
	});
});
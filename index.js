$(document).ready(function() {
	console.log("test");

	// 點了飛走（一次性）
	$(".for_hover").click(function() {
		console.log("test");
		$(".chat").css({
			transitionDuration: '0.5s',
			transform: 'scale(1.2) rotate(45deg)'
		});
		$(".chat").removeClass('chat_hover');
		setTimeout(function () {
			$(".chat").css({
				transitionDuration: '0.5s',
				transform: 'scale(1.2) translateX(-40px) rotate(45deg)'
			});
		});

		setTimeout(function () {
			// 泡泡往右
			$(".chat").css({
				transitionDuration: '0.8s',
				transform: 'scale(1.2) translateX(2000px) rotate(45deg)'
			});

			// 左邊蓋版
			$(".bgc").css('width', '100vw');
		}, 700);

		setTimeout(function () {
			// 文字出現
			$(".bgc span").css('opacity', '1');
		}, 1200);

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
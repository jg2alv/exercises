$(document.body).ready(() => {
	let turn = 'O';
	function updateLeaderboard() {
		if (turn == 'O') {
			$('.leaderboard img').attr('src', 'img/O.png');
		} else {
			$('.leaderboard img').attr('src', 'img/X.png');
		}
	}
	function winner() {
		let a1 = $('.a1').attr('data-player');
		let a2 = $('.a2').attr('data-player');
		let a3 = $('.a3').attr('data-player');
		let b1 = $('.b1').attr('data-player');
		let b2 = $('.b2').attr('data-player');
		let b3 = $('.b3').attr('data-player');
		let c1 = $('.c1').attr('data-player');
		let c2 = $('.c2').attr('data-player');
		let c3 = $('.c3').attr('data-player');
		let winner = '';
		for (i = 0; i <= 1; i++) {
			if (i == 0) {
				var op = 'O';
			} else {
				var op = 'X';
			}
			if (a1 == op && b1 == op && c1 == op) {
				winner = op;
			}
			else if (a2 == op && b2 == op && c2 == op) {
				winner = op;
			}
			else if (a3 == op && b3 == op && c3 == op) {
				winner = op;
			}
			else if (a1 == op && a2 == op && a3 == op) {
				winner = op;
			}
			else if (b1 == op && b2 == op && b3 == op) {
				winner = op;
			}
			else if (c1 == op && c2 == op && c3 == op) {
				winner = op;
			}
			else if (a1 == op && b2 == op && c3 == op) {
				winner = op;
			}
			else if (c1 == op && b2 == op && a3 == op) {
				winner = op;
			}
		}
		if (winner != '') {
			if (winner == 'O') {
				alert("Ganhador: O");
			} else {
				alert("Ganhador: X");
			}

			$('.area').html('');
			$('.area').attr('data-player', '');
		}
		else if (a1 != '' && a2 != '' && a3 != '' && b1 != '' && b2 != '' && b3 != '' && c1 != '' && c2 != '' && c3 != '') {
			alert("Empate!");
			$('.area').html('');
			$('.area').attr('data-player', '');
		}
	}
	$(function () {
		updateLeaderboard();
		$('.area').on('click', function () {
			if ($(this).find('img').length == 0) {
				if (turn == 'O') {
					$(this).html('<img src="img/O.png" height="50">');
					$(this).attr('data-player', 'O');
					turn = 'X';
				} else {
					$(this).html('<img src="img/X.png" height="50">');
					$(this).attr('data-player', 'X');
					turn = 'O';
				}
				updateLeaderboard();
				winner();
			}
		});
	});
})
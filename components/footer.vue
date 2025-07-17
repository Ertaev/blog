<template>
	<footer class="footer">
		<div class="container footer__inner">
			<div class="footer__top">
				<div class="footer__pretitle">
					<p>Is there a project?</p>
				</div>

				<div class="footer__box">
					<h2 class="footer__title">Let’s work together</h2>

					<div class="footer__contacts">
						<div class="footer__contact">
							<p class="footer__contact-title">For all questions</p>

							<a class="footer__contact-text" href="tel:+7 (920) 278—00—68">+7 (920) 278—00—68</a>
							<a class="footer__contact-text" href="mailto:qtim@agency.com">qtim@agency.com</a>
						</div>

						<div class="footer__contact">
							<p class="footer__contact-title">Office in Russia</p>

							<p class="footer__contact-text">139 Ruben Station Lake Drew, NM 52678</p>
							<a class="footer__contact-icon" href="/">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</a>
						</div>

						<div class="footer__contact">
							<p class="footer__contact-title">Office in Dubai</p>

							<p class="footer__contact-text">139 Ruben Station Lake Drew, NM 52678</p>
							<a class="footer__contact-icon" href="/">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z" stroke="#E2BEFF" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div class="footer__bottom">
				<div class="sm__links">
					<a class="sm__link" href="/" target="_blank">Facebook</a>
					<a class="sm__link" href="/" target="_blank">Instagram</a>
					<a class="sm__link" href="/" target="_blank">Telegram</a>
				</div>
				
				<a href="/" class="footer__cta">
					<p>Go</p>
				</a>

				<div class="sm__links">
					<a class="sm__link" href="/" target="_blank">Behance</a>
					<a class="sm__link" href="/" target="_blank">Linkedn</a>
					<a class="sm__link" href="/" target="_blank">Privacy Policy</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer {
	background: #E2BEFF;
	padding-top: 140px;
	overflow: hidden;
}

.footer__pretitle {
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: 0.01em;
	color: #101010;
	margin-bottom: 56px;
	-webkit-user-select: none;
	   -moz-user-select: none;
	    -ms-user-select: none;
	        user-select: none;
}

.footer__box {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	        justify-content: space-between;
	margin-bottom: 260px;
	gap: 20px;
}

.footer__title {
	position: relative;
	font-weight: 400;
	font-size: 112px;
	line-height: 100%;
	color: #101010;
	max-width: 464px;
	text-underline-offset: auto;
	text-decoration: underline;
	text-decoration-thickness: 2px;
}

.footer__contacts {
	max-width: 152px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	gap: 36px;
}

.footer__contact-title {
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: 0.01em;
	color: #101010;
	margin-bottom: 12px;
}

.footer__contact-text {
	display: block;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: 0.01em;
	color: #101010;
	margin-bottom: 8px;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.footer__contact-text:last-child {
	margin-bottom: 0;
}

a.footer__contact-text:hover {
	color: #868686;
}

.footer__contact-icon {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	width: 32px;
	height: 32px;
	background: #101010;
	border-radius: 999px;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.footer__contact-icon:hover {
	background: #868686;
}

.footer__bottom {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	        justify-content: space-between;
	padding-bottom: 30px;
}

.sm__links {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	gap: 32px;
}

.sm__link {
	position: relative;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	letter-spacing: 0.01em;
	color: #101010;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.sm__link:hover {
	color: #868686;
}

.sm__link::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 1px;
	top: calc(100% - 2px);
	left: 0;
	background: #101010;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.sm__link:hover::before {
	background: #868686;
}

.footer__cta {
	position: relative;
}

.footer__cta::before {
	content: "";
	position: absolute;
	width: 358px;
	height: 358px;
	left: 50%;
	top: 50%;
	-webkit-transform: translate(-50%, calc(-50% + 30px));
	    -ms-transform: translate(-50%, calc(-50% + 30px));
	        transform: translate(-50%, calc(-50% + 30px));
	background: #101010;
	border-radius: 50%;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.footer__cta:hover::before {
	width: 400px;
	height: 400px;
}

.footer__cta:active::before,
.footer__cta:focus::before {
	width: 700px;
	height: 700px;
}

.footer__cta p {
	position: relative;
	font-weight: 400;
	font-size: 32px;
	line-height: 100%;
	color: #F3F3F3;
}

@media screen and (max-width: 992px) {
	.footer {
		padding-top: 50px;
	}

	.footer__title {
		font-size: 72px;
	}

	.footer__box {
		margin-bottom: 120px;
	}

	.sm__links {
		gap: 20px;
	}

	.footer__cta::before {
		width: 200px;
		height: 200px;
	}

	.footer__cta:hover::before {
		width: 280px;
		height: 280px;
	}

	.footer__cta:active::before,
	.footer__cta:focus::before {
		width: 360px;
		height: 360px;
	}
}

@media screen and (max-width: 768px) {
	.footer__cta {
		display: none;
	}
}

@media screen and (max-width: 560px) {
	.footer__box {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
		margin-bottom: 60px;
	}

	.sm__links {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
		-webkit-box-align: end;
		    -ms-flex-align: end;
		        align-items: flex-end;
	}

	.sm__links:nth-child(1) {
		-webkit-box-align: start;
		    -ms-flex-align: start;
		        align-items: flex-start;
	}
}
</style>
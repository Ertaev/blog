<template>
	<header class="header">
		<div class="header__container header__inner">
			<NuxtLink to="/" class="header__logo">
				<img src="../assets/img/logo.webp" width="84" height="25" loading="lazy" alt="logo">
			</NuxtLink>

			<div class="header__right">
				<ul class="header__nav">
					<li class="header__nav-item"><NuxtLink class="header__nav-link" to="/posts">Posts</NuxtLink></li>
					<li class="header__nav-item"><NuxtLink class="header__nav-link" to="/posts">Works</NuxtLink></li>
					<li class="header__nav-item"><NuxtLink class="header__nav-link" to="/posts">About</NuxtLink></li>
				</ul>

				<div class="header__actions">
					<div class="header__lang">
						<div class="current__lang">
							<img src="../assets/img/en.webp" alt="en">
						</div>
					</div>

					<NuxtLink to="/posts" class="header__button button">
						Let’s work
					</NuxtLink>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
.header__container {
	max-width: 1440px;
	padding: 34px 40px;
	margin: 0 auto;
}

.header__inner {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	        justify-content: space-between;
}

.header__logo {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
}

.header__right,
.header__nav,
.header__actions {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
}

.header__right {
	gap: 90px;
}

.header__nav {
	gap: 58px;
}

.header__nav-link {
	font-weight: 400;
	font-size: 20px;
	line-height: 100%;
	color: #101010;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.header__nav-link:hover {
	color: #232323;
}

.header__actions {
	gap: 16px;
}

.current__lang {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	padding: 10px;
	width: 52px;
	height: 52px;
	border: 2px solid rgba(0, 0, 0, 0.1);
	border-radius: 999px;
	cursor: pointer;
	-webkit-transition: all 0.3s ease;
	-o-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.current__lang:hover {
	background: #E8E8E8;
}

.current__lang img {
	width: 100%;
	height: 100%;
}

.header__button {
	width: 142px;
	height: 52px;
	border-radius: 999px;
}

@media screen and (max-width: 992px) {
	.header__right {
		gap: 40px;
	}

	.header__nav {
		gap: 20px;
	}
}

@media screen and (max-width: 768px) {
	.header__container {
		padding: 20px;
	}

	.header__button {
		width: 120px;
		height: 40px;
	}
}

@media screen and (max-width: 560px) {
	.header__nav,
	.current__lang {
		display: none;
	}
}
</style>
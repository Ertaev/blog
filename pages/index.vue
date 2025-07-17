<template>
	<NuxtLayout name="default">
		<section class="main">
			<div class="container">
				<div class="main__img qtim">
					<svg class="q-word" width="222" height="215" viewBox="0 0 222 215" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M113.753 214.471C90.8262 214.471 70.7406 210.165 53.4964 201.554C36.4481 192.943 23.2209 180.628 13.815 164.608C4.605 148.587 0 129.964 0 108.737C0 87.3102 4.70298 68.3863 14.1089 51.9656C23.7108 35.3446 36.742 22.5284 53.2024 13.5171C69.8588 4.50569 88.4747 0 109.05 0C129.43 0 147.85 4.50569 164.31 13.5171C180.967 22.5284 193.998 35.3446 203.404 51.9656C213.006 68.3863 217.807 87.3102 217.807 108.737C217.807 123.155 214.671 136.973 208.401 150.19C202.13 163.206 193.998 173.519 184.004 181.129H221.628V214.471H113.753ZM109.05 179.927C130.802 179.927 148.046 173.719 160.783 161.304C173.716 148.888 180.183 131.366 180.183 108.737C180.183 93.9185 177.047 80.9021 170.777 69.6879C164.506 58.4738 155.982 49.8629 145.204 43.8554C134.427 37.8478 122.375 34.844 109.05 34.844C95.7252 34.844 83.5758 37.8478 72.6022 43.8554C61.8245 49.8629 53.3004 58.4738 47.0298 69.6879C40.7591 80.9021 37.6238 93.9185 37.6238 108.737C37.6238 131.566 43.9924 149.188 56.7296 161.604C69.6628 173.819 87.103 179.927 109.05 179.927Z" fill="#101010"/>
					</svg>

					<svg class="t-word" width="162" height="210" viewBox="0 0 162 210" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M62.0205 31.5398H0V0H161.371V31.5398H99.3504V209.965H62.0205V31.5398Z" fill="#101010"/>
					</svg>

					<svg class="i-word" width="38" height="210" viewBox="0 0 38 210" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0H37.3299V209.965H0V0Z" fill="#101010"/>
					</svg>

					<svg class="m-word" width="211" height="210" viewBox="0 0 211 210" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 0H36.448L105.229 153.794L174.01 0H210.458V209.965H175.186V73.5929L114.047 209.965H96.4109L35.2723 73.5929V209.965H0V0Z" fill="#101010"/>
					</svg>
				</div>

				<h1 class="main__title">
					QTIM — тестовое задание
				</h1>
			</div>
		</section>
	</NuxtLayout>
</template>

<style scoped>
.main {
	padding: 100px 0 70px;
}

.main__img {
	margin-bottom: 130px;
}

.main__title {
	font-weight: 400;
	font-size: 40px;
	line-height: 100%;
	color: #101010;
	text-align: center;
}

.qtim {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
}

.q-word {
	margin-right: 8px;
}

.t-word {
	margin-right: 34px;
}

.i-word {
	margin-right: 48px;
}

.m-word {}

.qtim svg,
.main__title {
	opacity: 0;
	-webkit-transform: translateY(20px);
	    -ms-transform: translateY(20px);
	        transform: translateY(20px);
	-webkit-animation: fadeInUp 0.6s ease-out forwards;
	        animation: fadeInUp 0.6s ease-out forwards;
}

.qtim svg:nth-child(1) { -webkit-animation-delay: 0s; animation-delay: 0s; }
.qtim svg:nth-child(2) { -webkit-animation-delay: 0.2s; animation-delay: 0.2s; }
.qtim svg:nth-child(3) { -webkit-animation-delay: 0.4s; animation-delay: 0.4s; }
.qtim svg:nth-child(4) { -webkit-animation-delay: 0.6s; animation-delay: 0.6s; }

.main__title {
	-webkit-animation-delay: 0.8s;
	        animation-delay: 0.8s;
}

@-webkit-keyframes fadeInUp {
	to {
		opacity: 1;
		-webkit-transform: translateY(0);
		        transform: translateY(0);
	}
}

@keyframes fadeInUp {
	to {
		opacity: 1;
		-webkit-transform: translateY(0);
		        transform: translateY(0);
	}
}

@media screen and (max-width: 768px) {
	.main {
		padding: 50px 0;
	}

	.main__img {
		margin-bottom: 80px;
	}
}
</style>
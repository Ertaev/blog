<template>
	<div class="loader-wrapper">
		<div class="loader"></div>
	</div>
</template>

<style scoped>
.loader-wrapper {
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
.loader {
	width: 60px;
	aspect-ratio: 4;
	--_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
	background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
	background-size: calc(100% / 3) 100%;
	-webkit-animation: l7 1s infinite linear;
	        animation: l7 1s infinite linear;
}

@-webkit-keyframes l7 {
	33% {
		background-size: calc(100% / 3) 0%, calc(100% / 3) 100%,
			calc(100% / 3) 100%;
	}
	50% {
		background-size: calc(100% / 3) 100%, calc(100% / 3) 0%,
			calc(100% / 3) 100%;
	}
	66% {
		background-size: calc(100% / 3) 100%, calc(100% / 3) 100%,
			calc(100% / 3) 0%;
	}
}

@keyframes l7 {
	33% {
		background-size: calc(100% / 3) 0%, calc(100% / 3) 100%,
			calc(100% / 3) 100%;
	}
	50% {
		background-size: calc(100% / 3) 100%, calc(100% / 3) 0%,
			calc(100% / 3) 100%;
	}
	66% {
		background-size: calc(100% / 3) 100%, calc(100% / 3) 100%,
			calc(100% / 3) 0%;
	}
}
</style>

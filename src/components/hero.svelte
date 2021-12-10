<script>
</script>

<main>
	<div class="grid md:grid-cols-2  md:content-center w-screen hero">
		<div class="p-8 place-self-center md:justify-self-end">
			<p class="subtitle">Hi, my name is</p>
			<p class="firstname">Marensius Bae</p>
			<p class="lastname">Pettersen</p>
			<!-- <p class="subtitle" style="color: #b9f2ff;">A FULL-STACK DEVELOPER</p> -->
			<p class="subtitle" style="color:#b9f2ff;">& I CODE SOLUTIONS</p>

			<a href="mailto:marensius.pettersen@gmail.com"><button
                
				class="bg-transparent hover:bg-blue-900 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
			>
				Hire me
			</button>
            </a>
		</div>

		<div
			class="invisible md:visible picture-container place-self-center place-items-center"
			style="position: relative; z-index: 0;"
		>
			<div id="frame" />
			<img class="picture" src="/profile.png" alt="profile" width="250px" />
		</div>
		<ul class="shapes">
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
			<li />
		</ul>
	</div>
</main>

<style>
	p {
		font-family: 'Lato';
		color: #f5f5f5;
	}
	.subtitle {
		letter-spacing: 0.4em;
	}

	.firstname {
		font-weight: bold;
		font-size: 4em;
		margin-left: -0.05em;
	}

	@media screen and (min-width: 768px) {
		.firstname {
			line-height: 0.25;
		}
		.subtitle {
			margin: 0em 0em 2em 0em;
		}
	}

    @media screen and (max-width: 768px) {
		.subtitle {
			margin: 0em 0em 0em 0em;
		}
        button {
            margin-top: 2em;
        }
	}

	.lastname {
		font-weight: bold;
		font-size: 4em;
		margin-left: -0.05em;
	}
	.picture {
		filter: grayscale();
		border-radius: 0.25em;
		position: absolute;
		float: left;
		top: -5%;
		left: -5%;
		z-index: 10;
	}

	.hero:hover > .picture-container img {
		filter: none;
	}

	.hero:hover > .picture-container #frame {
		transform: translate(-5%, -5%);
	}

	#frame {
		width: 250px;
		height: 250px;
		border-style: solid;
		border-color: #b9f2ff;
		border-radius: 0.25em;
		border-width: 0.2em;
		transition-property: transform;
		transition-duration: 0.5s;
	}

	/* Animated shapes CSS */

	.shapes {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		pointer-events: none;
	}

	.shapes li {
		position: absolute;
		display: block;
		list-style: none;
		width: 20px;
		height: 20px;
		background: rgba(73, 95, 100, 0.2);;
		z-index: -1;
		animation: animate 25s linear infinite;
		bottom: -150px;
	}

	.shapes li:nth-child(1) {
		left: 25%;
		width: 80px;
		height: 80px;
		animation-delay: 0s;
	}

	.shapes li:nth-child(2) {
		left: 10%;
		width: 20px;
		height: 20px;
		animation-delay: 2s;
		animation-duration: 12s;
	}

	.shapes li:nth-child(3) {
		left: 70%;
		width: 20px;
		height: 20px;
		animation-delay: 4s;
	}

	.shapes li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		animation-delay: 0s;
		animation-duration: 18s;
	}

	.shapes li:nth-child(5) {
		left: 65%;
		width: 20px;
		height: 20px;
		animation-delay: 0s;
	}

	.shapes li:nth-child(6) {
		left: 75%;
		width: 110px;
		height: 110px;
		animation-delay: 3s;
	}

	.shapes li:nth-child(7) {
		left: 35%;
		width: 150px;
		height: 150px;
		animation-delay: 7s;
	}

	.shapes li:nth-child(8) {
		left: 50%;
		width: 25px;
		height: 25px;
		animation-delay: 15s;
		animation-duration: 45s;
	}

	.shapes li:nth-child(9) {
		left: 20%;
		width: 15px;
		height: 15px;
		animation-delay: 2s;
		animation-duration: 35s;
	}

	.shapes li:nth-child(10) {
		left: 85%;
		width: 150px;
		height: 150px;
		animation-delay: 0s;
		animation-duration: 11s;
	}

	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 1;
			border-radius: 0;
		}

		100% {
			transform: translateY(-1000px) rotate(720deg);
			opacity: 0;
			border-radius: 50%;
		}
	}

	@keyframes animate {
		0% {
			transform: translateY(0) rotate(0deg);
			opacity: 0;
		}
		50% {
			transform: translateY(-60vh) rotate(360deg);
			opacity: 1;
		}
		100% {
			transform: translateY(-120vh) rotate(720deg);
			opacity: 0;
		}
	}

	/* lato-regular - latin */
	@font-face {
		font-family: 'Lato';
		font-style: normal;
		font-weight: 400;
		src: url('../fonts/lato-v20-latin-regular.eot'); /* IE9 Compat Modes */
		src: local(''), url('../fonts/lato-v20-latin-regular.eot?#iefix') format('embedded-opentype'),
			/* IE6-IE8 */ url('../fonts/lato-v20-latin-regular.woff2') format('woff2'),
			/* Super Modern Browsers */ url('../fonts/lato-v20-latin-regular.woff') format('woff'),
			/* Modern Browsers */ url('../fonts/lato-v20-latin-regular.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('../fonts/lato-v20-latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
	}
</style>

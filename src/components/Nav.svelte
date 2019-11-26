<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 20px 0;
		background-color: #F9F7F1;
		display: block;
		min-height: 85px;
		max-width: 100%;
	}

	div.wrap {
		margin: 0 auto;
		max-width: 1200px;
	}

	ul {
		margin: 0;
		padding: 0;
		float: right;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
		font-weight: 500;
    font-size: 16px;
    line-height: 1.75;
    letter-spacing: -.01em;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	.site-title {
    display: block;
    text-indent: -9999px;
	}

	.site-title > a {
    float: left;
    min-height: 80px;
    width: 100%;
	}

	.title-area {
    margin: 0 auto;
    max-width: 300px;
    padding: 0;
	}

	.site-title a {
		background: url(/icbed-logo.png) no-repeat;
		background-size: contain;
	}

	.site-description {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    overflow: hidden;
    position: absolute !important;
    width: 1px;
    word-wrap: normal !important;
	}

	.title-area {
		float: left;
    padding: 10px 0;
    width: 300px;
		height: 80px;
		margin: 0 auto;
    max-width: 300px;
    padding: 0;
	}
</style>

<nav>
	<div class="wrap">
		<div class="title-area">
			<h1 class="site-title" itemprop="headline">
				<a href="/">It Can Be Easily Done</a>
			</h1>
			<p class="site-description" itemprop="description">Actionable advice about how to do the “right” thing… better and with less stress.</p>
		</div>
		<ul>
			<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Home</a></li>
			<li><a class='{segment === "start-here" ? "selected" : ""}' href='start-here'>Start Here</a></li>
			<li><a class='{segment === "about" ? "selected" : ""}' href='about'>About</a></li>
			<li><a class='{segment === "contact" ? "selected" : ""}' href='contact'>Contact</a></li>
		</ul>
	<div>
</nav>

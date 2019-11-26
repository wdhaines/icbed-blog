<script>
	export let segment
</script>

<style>
	footer {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		background-color: #fff;
		font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
		font-size: 12px;
		line-height: 1.5;
		letter-spacing: .08em;
		margin-top: 70px;
		font-weight: 500;
		text-transform: uppercase;
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

	li, p {
		display: block;
	}

	p {
		float: left;
	}

	li {
		float: left;
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
</style>

<footer>
	<div class="wrap">
		<p>Copyright &copy; 2017–2019 Will Haines</p>
		<ul>
			<li><a class='{segment === "terms-of-service" ? "selected" : ""}' href='terms-of-service'>Terms of Service</a></li>
			<li><a class='{segment === "privacy-policy" ? "selected" : ""}' href='privacy-policy'>Privacy Policy</a></li>
			<li><a class='{segment === "disclaimer" ? "selected" : ""}' href='disclaimer'>Disclaimer</a></li>
		</ul>
	</div>
</footer>

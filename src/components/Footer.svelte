<script>
	export let segment
</script>

<style>
	footer {
		max-width: 1600px;
		padding: 20px;
		border-top: 1px solid rgba(255,62,0,0.1);
		font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
		font-size: 1.2rem;
		letter-spacing: .08em;
		text-transform: uppercase;
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
		float: left;
		margin-bottom: 0;
	}

	a {
		text-decoration: none;
		padding: 0 0.5rem;
		display: block;
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
</style>

<footer class="container">
	<p>Copyright &copy; 2017–2020 Will Haines</p>
	<ul>
		<li><a class='{segment === "terms-of-service" ? "selected" : ""}' href='terms-of-service'>Terms of Service</a></li>
		<li><a class='{segment === "privacy-policy" ? "selected" : ""}' href='privacy-policy'>Privacy Policy</a></li>
		<li><a class='{segment === "disclaimer" ? "selected" : ""}' href='disclaimer'>Disclaimer</a></li>
	</ul>
</footer>

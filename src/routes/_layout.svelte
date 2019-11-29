<script>
	import Nav from '../components/Nav.svelte'
	import Footer from '../components/Footer.svelte'
	import Signup from '../components/Signup.svelte'

	export let segment;
</script>

<style>
		main {
			margin-top: 50px;
		}
</style>

<Nav {segment}/>

<main class="container">
	<div class="row">
		<article class="two-thirds column">
			<slot></slot>
		</article>

		<Signup/>
	</div>
</main>

<Footer {segment}/>

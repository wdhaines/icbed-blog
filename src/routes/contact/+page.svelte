<script>
	import { post, validateEmail } from '$lib/utils.js';

	let _replyto = ''
	let name = ''
	let subject = ''
	let message = ''
	let errors = []
	let success = false

	async function submit(event) {
		errors = []
		if (!validateEmail(_replyto)) {
			errors.push('Please enter a valid email address.');
		}
		if (!message) {
			errors.push('Message is required.')
		}
		if (errors.length > 0) {
			return
		}
		const response = await post('https://formspree.io/maynwngp',
			{ _replyto, name, subject, message })
		if (!response.error) {
			success = true
    } else {
			errors.push('Something went wrong. Please try again.')
    }
	}
</script>

<style>
	input, textarea {
		width: 80%;
	}
</style>

<svelte:head>
	<title>Get In Contact With Me | It Can Be Easily Done</title>
	<meta name="description" content="Get in contact with Will at “It Can Be Easily Done” to learn how to do the “right” things and finish what you want to get done. I want to hear from you!" />
</svelte:head>

<h1>Get In Contact With Me</h1>

<p>Thank you for visiting It Can Be Easily Done. I’m here to help you finish the things that you want to do, and I want to hear from you!</p>

<p>Whether you have a question, a suggestion, or just want to talk I’m listening. As long as you’re not a robot (at least not the bad kind), shoot me an email with this handy form, and I’ll be sure to get back to you.</p>

<p>I read everything.</p>

<form
  id="my-form"
  action="https://formspree.io/maynwngp"
  method="POST">

	<p>
  <label>
    Your email<br>
    <input type="text" name="_replyto" bind:value={_replyto}>
  </label>
	</p>

	<p>
	<label>
		Your name<br>
		<input type="text" name="name" bind:value={name}>
	</label>
	</p>

	<p>
	<label>
		Subject<br>
		<input type="text" name="subject" bind:value={subject}>
	</label>
	</p>

	<p>
  <label>
    How can we help?<br>
    <textarea name="message" bind:value={message}></textarea>
  </label>
	</p>

	{#each errors as error}
		<p>{error}</p>
	{/each}

	{#if success}
		<p>Thanks!</p>
	{:else}
  	<button on:click|preventDefault={submit} type="submit">Send Your Message</button>
	{/if}
</form>

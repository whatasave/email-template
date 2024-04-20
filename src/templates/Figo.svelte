<script lang="ts">
	import { Email, Text, Vertical } from '$components/email';
</script>

<Email lang="en" content={Vertical([Text('Hello, Figo!'), Text('Hello, Figo!')])} />

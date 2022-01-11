<template>
    Happy new year 2021!!!
</template>


<script>
import axios from 'axios';

export default {
	created() {
		axios.post('http://localhost:3432/index/register', 
		{
			email: 'serce@gmail.com',
			name: 'Andrew',
			nickname: 'mr.x_retro',
			pass: '1232'
		})
		.then(res => console.log(res.data))
		.catch(err => console.log(err))
	}
}
</script>
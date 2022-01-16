<template>
    <section class="py-4">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
                <div style="max-width:420px;">
                    <form @submit.prevent="onSubmit" class="bg-white border py-4 px-5" method="post">
                        <div class="text-center mb-3">
                            <img src="https://pngimg.com/uploads/instagram/instagram_PNG5.png" class="text-secondary mb-2 size" />
                            <p class="text-muted fw-bold">
                                Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                            </p>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="Mobile Number or Email" type="email" /><label>эл. адрес</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="Full Name" type="text" /><label>Имя и фамилия</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="Username" type="text" /><label>Имя пользователя</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="Password" type="password" /><label>Пароль</label>
                        </div>
                        <div class="mb-2">
                            <button 
                                class="btn btn-primary fw-bold w-100 bg-gradient" 
                                :disabled="isSubmutting">Далее</button>
                        </div>
                        <div class="small text-center">
                            Регистрируясь, вы принимаете наши Условия. Прочитайте Политику использования данных, чтобы узнать, как мы получаем, используем и передаем ваши данные, а также просмотрите Политику в отношении файлов cookie, чтобы узнать, как мы используем файлы cookie и подобные технологии.
                        </div>
                    </form>
                    <div class="bg-white py-4 px-5 text-center border mt-4">
                        <p class="m-0">
                            Есть аккаунт? <a href="#">Вход</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'MvcRegister',
    computed: {
        isSubmutting() {
            return this.$store.state.auth.isSubmutting
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('register', {
                email: 'authJS@gmail.com',
                name: 'Alex21',
                username: 'Retro_smusic',
                password: 'sdfsd12fs'
            }).then(user => {
                console.log(user)
            })
        }
    }
}
</script>

<style scoped>
.size {
    width: 300px;
    height: 100px;
}
</style>
<template>
    <section class="py-4">
        <div class="container">
            <div class="row d-flex align-items-center justify-content-center">
                <div style="max-width:420px;">
                    <form @submit.prevent="onSubmit" class="bg-white border py-4 px-5" method="post">
                        <div class="text-center mb-3">
                            <img src="../assets/logo.png" class="text-secondary mb-2 size" />
                            <p class="text-muted fw-bold">
                                Зарегистрируйтесь, чтобы смотреть фото ваших друзей.
                            </p>
                        </div>
                        <p  v-if="validationErrors" class="fw-bold text-danger">
                            <ul>
                                 <li>
                                    <mvc-validation-errors :validation-errors="validationErrors" />
                                </li>
                            </ul>
                        </p>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="Email" type="email" v-model="email" />
                            <label>эл. адрес</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="Name" type="text" v-model="name" />
                            <label>Имя и фамилия</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="Usename" type="text" v-model="username" />
                            <label>Имя пользователя</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input class="form-control" placeholder="password" type="password" v-model="pass" />
                            <label>Пароль</label>
                        </div>
                        <div class="mb-2">
                            <button 
                                class="btn btn-primary fw-bold w-100 bg-gradient" 
                                :disabled="isSubmutting">Далее</button>
                        </div>
                    </form>
                    <div class="bg-white py-4 px-5 text-center border mt-4">
                        <p class="m-0">
                            Есть аккаунт? <router-link :to="{name: 'login'}">Вход</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState} from 'vuex'
import MvcValidationErrors from '@/components/ValidationErrors'
import {actionsTypes} from '@/store/modules/auth'

export default {
    name: 'MvcRegister',
    components: {
        MvcValidationErrors
    },
    data() {
        return {
            email: '',
            name: '',
            username: '',
            pass: ''
        }
    },
    computed: {
        ...mapState({
            isSubmutting: state => state.auth.isSubmutting,
            validationErrors: state => state.auth.validationErrors,
        })
    },
    methods: {
        onSubmit() {
            this.$store.dispatch(actionsTypes.register, {
                email: this.email,
                name: this.name,
                username: this.username,
                password: this.pass
            }).then(() => {
                this.$router.push({name: 'home'})
            })
        }
    }
}
</script>

<style scoped>
.size {
    height: 130px;
}
</style>
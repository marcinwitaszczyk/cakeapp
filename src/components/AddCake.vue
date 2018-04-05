<template>
    <div>
        <form accept-charset="utf-8" @submit.prevent="add">
            <div>
                Name: <input type="text" name="name" v-model="form.name">
                <span v-if="errors.name">{{ errors.name }}</span>
            </div>
            <div>
                Comment: <input type="text" name="comment" v-model="form.comment">
                <span v-if="errors.comment">{{ errors.comment }}</span>
            </div>
            <div>
                yumFactor:

                <select name="yum-factor" v-model="form.yumFactor">
                    <option value="0" selected disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <span v-if="errors.yumFactor">{{ errors.yumFactor }}</span>
            </div>
            <div>
                Image url: <input type="text" name="image-url" v-model="form.imageUrl">
                <span v-if="errors.imageUrl">{{ errors.imageUrl }}</span>
            </div>

            <button type="submit" :disabled="loading">{{ loading ? 'Loading...' : 'Add cake' }}</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loading: false,
                form: {
                    name: '',
                    comment: '',
                    yumFactor: 0,
                    imageUrl: '',
                },
                errors: {
                    name: '',
                    comment: '',
                    yumFactor: '',
                    imageUrl: '',
                },
            }
        },
        methods: {
            add() {
                if (! this.validate()) {
                    return
                }

                this.loading = true

                fetch('http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes', {
                    method: 'post',
                    body: JSON.stringify(this.form),
                    headers: new Headers({
                        'Content-Type': 'application/json',
                    }),
                })
                    .then(response => this.$router.push({ name: 'CakesList' }))
                    .then(() => this.loading = false)
            },
            validate() {
                this.errors = {
                    name: '',
                    comment: '',
                    yumFactor: '',
                    imageUrl: '',
                }

                if (this.form.name.length < 3) {
                    this.errors.name = 'Name must be at least three characters long!'
                }

                if (this.form.comment.length < 3) {
                    this.errors.comment = 'Comment must be at least three characters long!'
                }

                if (this.form.imageUrl.length < 3) {
                    this.errors.imageUrl = 'Name must be at least three characters long!'
                }

                try {
                    new URL(this.form.imageUrl)
                } catch (e) {
                    this.errors.imageUrl = 'Please provide a valid url!'
                }

                if (this.form.yumFactor === 0) {
                    this.errors.yumFactor = 'Please select a yum factor!'
                }

                return (! this.errors.name && ! this.errors.comment && ! this.errors.imageUrl && ! this.errors.yumFactor)
            },
        },
    }
</script>

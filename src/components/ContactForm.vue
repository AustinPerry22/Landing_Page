<template>
  <section class="row justify-content-center">
    <form class="col-6 form bg-dark p-4 rounded-4" action="https://api.web3forms.com/submit" method="POST">
        <h3 class="text-center mb-3">Contact Me</h3>
        <input type="hidden" name="access_key" value="65be978b-b4a8-479b-a49b-a55aa7dc3775">

        <!-- Form Inputs. Each input must have a name="" attribute -->
        <section class="row justify-content-center">
          <div class="col-6">
            <label for="name">Name:</label>
            <input class="form-control" type="text" placeholder="your name" name="name" required>
          </div>
          <div class="col-6">
            <label for="email">Email:</label>
            <input class="form-control" type="email" placeholder="myemail@email.com" name="email" required>
          </div>
          <div class="col-12 my-3">
            <label for="message">Message:</label>
            <textarea class="form-control" name="message" type="text" maxlength="2000" rows="12" placeholder="write your message here" required></textarea>
          </div>
          <div class="h-captcha" data-captcha="true"></div>
          <button class="btn btn-success col-3" type="submit">Submit Form</button>
        </section>

        <title>Name:</title>

        <!-- hCaptcha Spam Protection -->

    </form>
  </section>
</template>

<script>
export default {
setup() {
  return {};
},
};
</script>


<style>
.form-border{
    border-style: dashed;
    border-color: rgb(18, 20, 88);
    border-width: .75em;
}
</style>
<template>
  <section class="row justify-content-center">
    <form class="col-11 col-md-6 form bg-dark p-3 rounded-4" action="https://formsubmit.co/b46bd455ddbb0348650d9a29ef6935ef" method="POST">
      <input type="text" name="_honey" style="display:none">
      <h3 class="text-center mb-3">Contact Me</h3>
      <!-- Form Inputs. Each input must have a name="" attribute -->
      <section class="row justify-content-center">
        <div class="col-12 col-md-6">
          <label for="name">Name:</label>
          <input class="form-control" type="text" placeholder="your name" name="name" required>
        </div>
        <div class="col-12 col-md-6 my-3 my-md-0">
          <label for="email">Email:</label>
          <input class="form-control" type="email" placeholder="myemail@email.com" name="email" required>
        </div>
        <div class="col-12 my-3">
          <label for="message">Message:</label>
          <textarea class="form-control" name="message" type="text" maxlength="2000" rows="12" placeholder="write your message here" required></textarea>
        </div>

        <button class="btn btn-success col-6 col-md-3" type="submit">Submit Form</button>
      </section>
    </form>
  </section>
</template>

<script>

export default {
setup() {
  return {
  };
},
};
</script>


<style>
.form-border{
    border-style: dashed;
    border-color: rgb(18, 20, 88);
    border-width: .75em;
}
button:hover{
    transform: scale(1.1);
}
</style>
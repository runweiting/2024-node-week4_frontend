<template>
  <div class="shadow-sign-in">
    <div class="container mt-24 px-12 py-17 border border-black border-2 bg-light">
      <div class="row">
        <div class="col">
          <img src="../../../public/signin.svg" alt="sign-in-image" class="object-fit-cover img-fluid" style="height: 340px;">
        </div>
        <div class="col text-center">
          <h1 class="text-primary display-3">MetaWall</h1>
          <h4 class="helvetica-neue fw-bold mb-9">註冊</h4>
          <input type="text" class="form-control rounded-0 border border-black border-2 mb-4" placeholder="匿稱" aria-label="nickname" aria-describedby="nickname">
          <input type="text" class="form-control rounded-0 border border-black border-2 mb-4" placeholder="Email" aria-label="email" aria-describedby="email">
          <input type="text" class="form-control rounded-0 border border-black border-2 mb-8" placeholder="Password" aria-label="password" aria-describedby="password">
          <button type="button" class="btn btn-gray border border-2 border-black text-white azeret-mono fw-bold w-100 mb-4" style=" border-bottom: 4px solid black !important;">
            註冊
          </button>
          <button type="button" class="btn azeret-mono fw-bold w-100 hvr-btn-signup">
            登入
          </button>
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.shadow-sign-in {
  position: relative;
  z-index: 10;

  &::after {
    position: absolute;
    top: 7px;
    left: 270px;
    z-index: -1;
    display: block;
    width: 870px;
    height: 560px;
    background-color: #00000040;
    content: ''
  }
}

.form-control::placeholder {
  color: #9B9893;
  font-family: "Azeret Mono";
}

.hvr-btn-signup:hover {
  background-color: #e2edfa;
  border: 2px solid black;
}

</style>
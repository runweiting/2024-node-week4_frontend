<template>
  <header>
    <nav class="navbar border-bottom border-black border-3 p-0 bg-white">
      <div class="container py-3">
        <h1 class="mb-0 overflow-hidden d-flex align-items-center" style="white-space: nowrap;">
          <RouterLink 
            :to="{ name: 'sign-in' }" class="navbar-brand m-0 fs-3 p-0">MetaWall
          </RouterLink>
        </h1>
        <div class="dropdown d-flex align-items-center gap-2">
          <div class="rounded-circle overflow-hidden" style="width: 30px; height: 30px;">
            <img src="../../public/user.png" alt="customer-feedback-avatar-man" class="object-fit-cover img-fluid">
          </div>
          <RouterLink 
            :to="{ name: 'member' }" class="nav-link fs-6 azeret-mono fw-bold dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Member
          </RouterLink>
          <ul class="dropdown-menu noto-sans-tc mt-2 py-0 text-center rounded-0" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item py-2" href="#">我的貼文牆</a></li>
            <li><a class="dropdown-item py-2" href="#">修改個人資料</a></li>
            <li><a class="dropdown-item py-2" href="#">登出</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
.nav-link.active {
  margin-top: 4px;
  border-bottom: 2px solid black;
}

.dropdown-menu {
  position: absolute;
  z-index: 10;

  &::after {
    position: absolute;
    top: 5px;
    left: 5px;
    z-index: -1;
    display: block;
    width: 160px;
    height: 130px;
    background-color: white;
    border: 2px solid black;
    content: '';
  }
}

.dropdown-item {
  margin-bottom: -2px;
  background-color: white;
  border: 2px solid black;

  &.active {
    background-color: #efece7 !important;
  }
}
</style>
<template>
  <div class="container">
    <div class="categoriesContainer">
      <div class="category" id="category1">
        <router-link :to="{ name: 'exploreCategory', params: { categoryName: 'Fotografia' } }"
          >Fotografia</router-link
        >
      </div>
      <div class="category" id="category2">
        <router-link :to="{ name: 'exploreCategory', params: { categoryName: 'Vídeo' } }"
          >Vídeo</router-link
        >
      </div>
      <div class="category" id="category3">
        <router-link :to="{ name: 'exploreCategory', params: { categoryName: 'Desenho' } }"
          >Desenho</router-link
        >
      </div>
      <div class="category" id="category4">
        <router-link :to="{ name: 'exploreCategory', params: { categoryName: 'Web Design' } }"
          >Web Design</router-link
        >
      </div>
      <div class="category" id="category5">
        <router-link :to="{ name: 'exploreCategory', params: { categoryName: 'Modelo' } }"
          >Modelo</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"CategoriesBar",
};
</script>

<style scoped>
.container {
  position: fixed;
  top: 71px;
  height: 65px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e4e4e4;
  z-index: 1;
}

.categoriesContainer {
  display: flex;
  justify-content: space-between;
  width: 50%;
}

a {
  text-decoration: none;
  color: black;
  font-family: "Gilroy", sans-serif;
  font-weight: 800;
  font-size: 17px;
}

.category {
  border-bottom: 5px solid;
  line-height: 7px;
  margin: 19px 0;
  transition: all 0.06s ease-in;
  width: 110px;
}

.category:hover {
  border-width: 0;
  transform: scale(1.2);
  transform-origin: left -20%;
}

#category1 {
  grid-column: 2/3;
  border-color: #ffba7a;
}

#category2 {
  grid-column: 4/5;
  border-color: #ff8ba0;
}

#category3 {
  grid-column: 6/7;
  border-color: #ff99f5;
}

#category4 {
  grid-column: 8/9;
  border-color: #58d9f5;
}

#category5 {
  grid-column: 10/11;
  border-color: #adff90;
}
</style>

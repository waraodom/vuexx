<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>รายการอาหาร</h2>
        </div>
        <div class="card-body">
          <table class="table table-hover">
            <thead>
              <tr>
                <th style="width: 8.33%">ลำดับ</th>
                <th style="width: 50%">รายการอาหาร</th>
                <th style="width: 10%%">ราคา</th>
                <th style="width: 31.66%">การดำเนินการ</th>
              
               </tr>
            </thead>
            <tbody>
              <tr v-for="(food,index) in $store.getters.foods" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ food.name }}</td>
                <td>{{ food.price }}</td>
                <td><button
                    type="button"
                    class="btn btn-danger mr-2"
                    v-on:click="deleteFood(index)"
                  >ลบ</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editIndex: -1,
      name: "",
      price: 0
    };
  },
  methods: {
    deleteFood(index) {
      this.$store.dispatch("deleteFood", index);
     }
  }
};
</script>
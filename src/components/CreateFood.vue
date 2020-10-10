<template>
  <div class="container fluid">
    <br />
    <div>
      <div class="card">
        <div class="card-header">
          <h2>เพิ่มรายการอาหาร</h2>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="addFood()">
            <div class="form-group">
              <label>ชื่ออาหาร</label>
              <div style="padding:10px 0">
                            <select v-model="name">
                                <option value="สามชั้น">สามชั้น</option>
                                <option value="โคขุน">โคขุน</option>
                                <option value="เนื้อ">เนื้อ</option>
                                <option value="เนื้อไก่">เนื้อไก่</option>
                                <option value="ไส้">ไส้</option>
                                <option value="ปลาหมึก">ปลาหมึก</option>
                                <option value="เนื้อปลา">เนื้อปลา</option>
                                <option value="ไส้กรอกไก่">ไส้กรอกไก่</option>
                                <option value="ไส้กรอกชีส">ไส้กรอกชีส</option>
                                <option value="เห็ด">เห็ด</option>
                                <option value="ไส้กรอกพันเบค่อน">ไส้กรอกพันเบค่อน</option>
                                <option value="สเต็กหมู">สเต็กหมู</option>
                                <option value="เอ็นไก่">เอ็นไก่</option>
                                </select>
                        </div>
            </div>
            <div class="form-group">
              <label>ราคาอาหาร</label>
              <input type="number" class="form-control" placeholder="ระบุราคาอาหาร" v-model="price" />
            </div>
            <button type="submit" class="btn btn-primary">เพิ่มรายการอาหาร</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      price: 0
    };
  },
  methods: {
    addFood() {
      if (this.name) {
        let payload = { name: this.name, price: this.price };
        this.$store.dispatch("addFood", payload);
      }
    }
  }
};
</script>
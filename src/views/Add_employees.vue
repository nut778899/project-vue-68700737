<template>
  <div class="container my-5">
    <div class="d-flex justify-content-center align-items-center vh-100">
      <div class="card shadow p-4" style="width: 400px; border-radius: 15px;">
        
        <h3 class="text-center mb-4">เพิ่มข้อมูลพนักงาน</h3>

        <form @submit.prevent="addemployees">

          <div class="mb-3">
            <label class="form-label">ชื่อ-นามสกุล</label>
            <input 
              type="text" 
              class="form-control"
              v-model="form.full_name" 
              placeholder="ชื่อ-นามสกุล" 
              required>
          </div>

          <div class="mb-3">
            <select class="form-select" v-model="form.department" required>
              <option value="" disabled>เลือกแผนก</option>
              <option value="IT">คอมพิวเตอร์</option>
              <option value="บัญชี">บัญชี</option>
              <option value="บุคคล">บุคคล</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">เงินเดือน</label>
            <input 
              type="number" 
              class="form-control"
              v-model="form.salary" 
              placeholder="เงินเดือน" 
              required>
          </div>
          
          <button type="submit" class="btn btn-primary w-100">
            บันทึก
          </button>

        </form>

        <!-- แสดงผล -->
        <div v-if="message" class="alert mt-3"
             :class="status === 'success' ? 'alert-success' : 'alert-danger'">
          {{ message }}
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        full_name: "",
        department: "",
        salary: "",
        active: "1" // ✅ ตั้งค่าเริ่มต้น
      },
      message: "",
      status: "",
    }
  },
  methods: {
    async addemployees() {
      try {
        console.log(this.form); // debug

        const res = await fetch('http://localhost/project-vue-68700737/php_api/add_employees.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        const result = await res.json();

        this.message = result.message;
        this.status = result.status;

        if (result.status === 'success') {
          this.form = {
            full_name: "",
            department: "",
            salary: "",
            active: "1"
          };
        }

      } catch (error) {
        this.message = 'เชื่อมต่อ API ไม่สำเร็จ';
        this.status = 'error';
      }
    }
  }
}
</script>
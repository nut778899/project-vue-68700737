<template >
    <div class="container my-5 ">
      <h2>แสดงข้อมูลลูกค้า</h2>
      <table class="table table-striped">
     <thead >  
    <tr  class="table table-dark table-hover">
      <th >รหัสลูกค้า</th>
      <th >ชื่อ-นามสกุล</th>
      <th >คณะ</th>
      <th >เงินเดือน</th>
      <th >active</th>
       <th >วันที่ทำรายการ</th>
    </tr>
  </thead>

  <tbody class="table table-dark table-hover">
    <tr v-for="item in employees" :key="item.employees_id">
      <td>{{item.emp_id}}</td>
      <td>{{item.full_name}}</td>
      <td>{{item.department}}</td>
      <td>{{item.salary}}</td>
      
    <td>
      <spna v-if="item.active==1">ปกติ</spna>
        <spna v-else >ลาออก</spna>
        </td>

        
      <td>{{item.created_at}}</td>
        </tr>
        
      
  </tbody>
</table>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const employees = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch('http://localhost/project-vue-68700737/php_api/show_employees.php')
    employees.value = await res.json()
    //products.value = data.products
  } catch (err) {
    error.value = 'โหลดข้อมูลไม่สำเร็จ'
  } finally {
    loading.value = false
  }
})
</script>
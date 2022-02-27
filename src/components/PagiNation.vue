<template>
    <nav aria-label="Page navigation ">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous" >
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item" v-for="(page,i) in pages.total_pages" :key="i">
        <a class="page-link" href="#">{{page}}</a></li>

    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  props: ['pages'],
  data () {
    return {

    }
  }
}
</script>

<script>
import galleriesData from '~/app/data/galleries_yelp.json'

export default {
  data() {
    return {
      galleries: galleriesData.data.search.business,
    }
  },
}
</script>

<template>
  <div>
    <h1>galleries in New Orleans</h1>
    <ul>
      <li v-for="gallery in galleries" :key="gallery.name">
        <ListingSimple
          :name="gallery.name"
          :address="gallery.location.address1"
          :city="gallery.location.city"
          :phone="gallery.phone"
          :rating="gallery.rating"
          :reviews="gallery.review_count"
          :price="gallery.price"
        />
      </li>
    </ul>
  </div>
</template>

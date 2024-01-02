<script>
import hotelsData from '~/app/data/hotels_yelp.json'

export default {
  data() {
    return {
      hotels: hotelsData.data.search.business,
    }
  },
}
</script>

<template>
  <div>
    <h1>Hotels in New Orleans</h1>
    <ul>
      <li v-for="hotel in hotels" :key="hotel.name">
        <ListingSimple
          :name="hotel.name"
          :address="hotel.location.address1"
          :city="hotel.location.city"
          :phone="hotel.phone"
          :rating="hotel.rating"
          :reviews="hotel.review_count"
          :price="hotel.price"
        />
      </li>
    </ul>
  </div>
</template>

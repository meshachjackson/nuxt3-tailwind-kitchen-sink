<script>
import restaurantsData from '~/app/data/restaurants_yelp.json'

export default {
  data() {
    return {
      restaurants: restaurantsData.data.search.business,
    }
  },
}
</script>

<template>
  <div>
    <h1>restaurants in New Orleans</h1>
    <ul>
      <li v-for="restaurant in restaurants" :key="restaurant.name">
        <ListingSimple
          :name="restaurant.name"
          :address="restaurant.location.address1"
          :city="restaurant.location.city"
          :phone="restaurant.phone"
          :rating="restaurant.rating"
          :reviews="restaurant.review_count"
          :price="restaurant.price"
        />
      </li>
    </ul>
  </div>
</template>

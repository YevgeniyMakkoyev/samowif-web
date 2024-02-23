<script setup lang="ts">
// const columns = [{
//   key: 'id',
//   label: 'ID'
// }, {
//   key: 'solAddress',
//   label: 'Sol Address',
//   sortable: true
// }, {
//   key: 'rank',
//   label: 'Rank',
//   sortable: true
// }]


import { computed, onMounted, ref } from "vue";
import {baseUrl} from "@/infrastructure/constants";

const columns = [ {
  key: 'name',
  label: 'Username',
  sortable: true
}, {
  key: 'completed_quests',
  label: 'Completed quests',
  sortable: true
}, {
  key: 'xp',
  label: 'Experience',
  sortable: true
}]


const currentPage = ref(1)
const pageCount = ref(5)

const totalPagesNumber = ref<number>();
const totalMembers = ref<number>(0);

// const uiSettings = {
//   wrapper: 'relative overflow-x-auto',
//   base: 'min-w-full table-fixed',
//   divide: 'divide-y divide-gray-300 dark:divide-gray-700',
//   thead: '',
//   tbody: 'divide-y divide-gray-200 dark:divide-gray-800',
//   tr: {
//     base: '',
//     selected: 'bg-gray-50 dark:bg-gray-200/50',
//     active: 'hover:bg-gray-50 dark:hover:bg-gray-100/50 cursor-pointer',
//   },
//   th: {
//     base: 'text-left rtl:text-right bg-gray-700/20',
//     padding: 'px-3 py-3.5',
//     color: '',
//     font: 'font-semibold',
//     size: 'text-sm',
//   },
//   td: {
//     base: 'whitespace-nowrap',
//     padding: 'px-3 py-4',
//     color: 'text-gray-200',
//     font: '',
//     size: 'text-sm',
//   },
//   checkbox: {
//     padding: 'ps-4',
//   },
//   loadingState: {
//     wrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
//     label: 'text-sm text-center text-gray-900 dark:text-white',
//     icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4 animate-spin',
//   },
//   emptyState: {
//     wrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
//     label: 'text-sm text-center text-gray-900 dark:text-white',
//     icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4',
//   },
//   default: {
//     sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
//     sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
//     sortButton: {
//       icon: 'i-heroicons-arrows-up-down-20-solid',
//       trailing: true,
//       square: true,
//       color: '',
//       variant: '',
//       class: '-m-1.5',
//     },
//     loadingState: {
//       icon: 'i-heroicons-arrow-path-20-solid',
//       label: 'Loading...',
//     },
//     emptyState: {
//       icon: 'i-heroicons-circle-stack-20-solid',
//       label: 'No items.',
//     },
//   },
// }

const members = ref<Array<any>>([]);
// const paginationUi = {
//   wrapper: 'flex items-center -space-x-px',
//   base: 'bg-teal-500 hover:bg-teal-600',
//   rounded: 'first:rounded-s-md last:rounded-e-md',
//   default: {
//     size: 'md',
//     activeButton: {
//       color: 'transparent',
//     },
//     inactiveButton: {
//       color: 'transparent',
//     },
//     firstButton: {
//       color: 'transparent',
//       class: 'rtl:[&_span:first-child]:rotate-180',
//       icon: 'i-heroicons-chevron-double-left-20-solid',
//     },
//     lastButton: {
//       color: 'transparent',
//       class: 'rtl:[&_span:last-child]:rotate-180',
//       icon: 'i-heroicons-chevron-double-right-20-solid',
//     },
//     prevButton: {
//       color: 'transparent',
//       class: 'rtl:[&_span:first-child]:rotate-180',
//       icon: 'i-heroicons-chevron-left-20-solid',
//     },
//     nextButton: {
//       color: 'transparent',
//       class: 'rtl:[&_span:last-child]:rotate-180',
//       icon: 'i-heroicons-chevron-right-20-solid',
//     },
//   },
// }

// const paginatedMembers = computed(() => {
//   return members.value!.slice((page.value - 1) * pageCount, (page.value) * pageCount)
// })

const requestLeaderboardMembers = async (page: number) => {
  try {
    const response = await fetch(`${baseUrl}/quests/leaderboard`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        limit: pageCount.value,
        page: page - 1
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const {leaderboard, totalUsers, totalPages} = await response.json();

    totalMembers.value = totalUsers;
    totalPagesNumber.value = totalPages;

    members.value = leaderboard.sort((a: any, b: any) => a.xp > b.xp);

    currentPage.value = page;

  } catch (error) {
    console.error('Fetch error:', error);
  }
}

onMounted(async () => {
  await requestLeaderboardMembers(currentPage.value);


  // console.log(data1)
  // console.log(await data2)
})

</script>

<template>
  <table class="w-full">
    <thead>
      <tr class="text-right">
        <th v-for="column in columns" :key="column.key" class="p-4">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="member in members" :key="member.userId" class="text-right">
        <td class="flex items-right flex-1 p-4"><img v-if="member.avatar" :src="member.avatar" class="w-8 h-8 rounded-full"> <div v-else class="w-8 h-8 rounded-full bg-gray-200/80"></div>  <div class="text-right flex-1">{{ member.name }}</div></td>
        <td class="p-4">{{ member.numberOfQuests }}</td>
        <td class="p-4">{{ member.xp }}</td>
      </tr>
    </tbody>
  </table>

  <div class="flex justify-end py-3.5 border-t border-gray-200 dark:border-gray-700 p-4">
      <button
      class="px-3.5 py-2 bg-gray-500/30 hover:bg-teal-400/40"
      :class="{'bg-teal-400/40': currentPage === page}"
        v-for="page in totalPagesNumber"
        :key="page"
        @click="requestLeaderboardMembers(page)"
      >
        {{ page }}
      </button>
    </div>
</template>


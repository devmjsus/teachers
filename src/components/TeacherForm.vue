<template>
	<section class="teacher-form">
		<h3>Add teacher</h3>
		<div><label for="">Name:</label> <input type="text" v-model="teacher.teacherName" /></div>
		<div><label for="">surname:</label> <input type="text" v-model="teacher.surname" /></div>
		<div><label for="">CC/TI:</label> <input type="text" v-model="teacher.cc" /></div>
		<div><label for="">Subjects:</label> <input type="text" v-model="subject" /></div>
		<input type="checkbox" v-model="teacher.doc" /> Documentation
		<div class="subject-actions">
			<button @click="handleSubject()">Add</button>
			<button @click="handleDeleteSubject(0)">Delete</button>
		</div>
		<div>
			<ul>
				<li v-for="(sub, index) in teacher.subjects" :key="index">{{ sub }}</li>
			</ul>
		</div>
		<button class="subject-actions" @click="handleAddTeacher()">Add teacher</button>
	</section>

	<section>
		<h3>List of teachers</h3>
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Surname</th>
					<th>CC/TI</th>
					<th>Subjects</th>
					<th>Documentation</th>
					<th>Doc Status</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(t, index) in teachers" :key="index">
					<td>{{ t.teacherName }}</td>
					<td>{{ t.surname }}</td>
					<td>{{ t.cc }}</td>
					<td>{{ t.subjects.join(', ') }}</td>
					<td>{{ t.doc ? 'Yes' : 'No' }}</td>
					<td v-if="t.doc">Entregada</td>
					<td v-else>No Entregada</td>
				</tr>
			</tbody>
		</table>
	</section>
</template>

<script lang="ts" setup>
import { ref, type Ref } from 'vue';
interface ITeacher {
	teacherName: string;
	surname: string;
	cc: string;
	subjects: Array<string>;
	doc: boolean;
}
const teacher: Ref<ITeacher> = ref({
	teacherName: '',
	surname: '',
	cc: '',
	subjects: [],
	doc: false,
});

const teachers: Ref<Array<ITeacher>> = ref([]);

const subject: Ref<string> = ref('');

const handleSubject = () => {
	teacher.value.subjects.push(subject.value);
	subject.value = ''; // Clear the input after adding
}

const handleDeleteSubject = (index: number) => {
	teacher.value.subjects.splice(index, 1); // Remove the subject at the specified index
}

const handleAddTeacher = () => {
	teachers.value.push(teacher.value);
	teacher.value = {
		teacherName: '',
		surname: '',
		cc: '',
		subjects: [],
		doc: false
	}; // Reset the form after adding
}

</script>

<style scoped>
.teacher-form {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

table {
	border-collapse: collapse;
	width: 100%;
}

th,
td {
	border: 1px solid #ddd;
	padding: 8px;
}

th {
	background-color: #f2f2f2;
}

button {
	margin-top: 1rem;
}

.teacher-form input[type='text'] {
	margin-left: 1rem;
}

.teacher-form input[type='checkbox'] {
	margin-left: 1rem;
}

.subject-actions {
	display: flex;
	gap: 1rem;
}

.subject-actions button {
	margin-top: 0;
}
</style>
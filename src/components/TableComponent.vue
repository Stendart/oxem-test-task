<template>
    <div class="card center">
        <table class="table" >
            <caption>People list</caption>
            <tr>
                <th>id</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>email</th>
                <th>phone</th>
            </tr>
            <tbody>
                <tr><td>34,5</td><td>3,5</td><td>36</td><td>23</td></tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
name: "TableComponent"
}
</script>

<style scoped>
    .table {
        width: 90%;
        border-collapse: collapse;
    }

    .table th {
        padding: .5rem 1rem;
    }

    .table td {
        padding: .5rem 1rem;
    }

    .table tbody td {
        text-align: center;
    }

    .table tbody tr:hover {
        background: #eee;
    }

    .card {
        width: 90%;
        /*overflow: hidden;*/
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: 10px;
        box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
        background: #fff;
    }

    .card.center {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>

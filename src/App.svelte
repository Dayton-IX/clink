<script lang="ts">
  const onClick = () => {
    console.log("clicked");
  };
</script>

<main>

  <h1>Clink</h1>

  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p>Main</p>
          </td>
          <td>
            <p>$5943</p>
          </td>
          <td>
            <button on:click={onClick}>✏️</button>
          </td>
          <td>
            <button>🗑</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</main>
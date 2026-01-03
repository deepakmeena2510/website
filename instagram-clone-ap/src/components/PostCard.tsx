eexport default function PostCard() {
  return (
    <div style={{
      width: 300,
      margin: "20px auto",
      border: "1px solid #ddd"
    }}>
      <div style={{ padding: 10, fontWeight: "bold" }}>
        demo_user
      </div>
      <div style={{
        height: 200,
        background: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        📷 Photo
      </div>
      <div style={{ padding: 10 }}>
        ❤️ 100 Likes
      </div>
    </div>
  );
}

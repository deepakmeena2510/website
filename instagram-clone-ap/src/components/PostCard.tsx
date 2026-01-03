export default function PostCard() {
  return (
    <div style={{
      background: '#fff',
      margin: '15px auto',
      width: 300,
      border: '1px solid #ddd',
      borderRadius: 6
    }}>
      <div style={{ padding: 10, fontWeight: 'bold' }}>
        demo_user
      </div>

      <div style={{
        height: 200,
        background: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        📷 Photo
      </div>

      <div style={{ padding: 10 }}>
        ❤️ 120 Likes
      </div>
    </div>
  )
}

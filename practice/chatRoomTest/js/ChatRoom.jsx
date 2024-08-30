function ChatRoom() {
    return <>
        <div className="chatroom">

        </div>
    </>
    function RoomList() {
        return <>
            <div className="room-list">

            </div>
        </>
        function RoomItem({ item }) {
            return <>
                <div className="room-item">
                    <h2>{item.title}</h2>
                </div>
            </>
        }
    }
}
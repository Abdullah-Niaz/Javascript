// Lexical Scope: If you’re in Room A, you can only access the items in Room A (local variables). If you step into Room B, you can access the items in Room B (another scope), but you can’t access the items from Room A unless you bring them with you. The idea is that your access to items (variables) is determined by the room (scope) you're in.


function officeRoomA() {
    let files = "Documents in Room A";

    function accessFilesInRoomA() {
        console.log(files); // Accessible because we're in Room A's scope
    }

    accessFilesInRoomA();
}

function officeRoomB() {
    let files = "Documents in Room B";

    function accessFilesInRoomB() {
        console.log(files); // Accessible because we're in Room B's scope
    }

    accessFilesInRoomB();
}

officeRoomA(); // Output: Documents in Room A
officeRoomB(); // Output: Documents in Room B

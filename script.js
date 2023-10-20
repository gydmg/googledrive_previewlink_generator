function convertLink() {
    // 获取用户输入的链接
    const inputLink = document.getElementById("driveLink").value;

    // 正则表达式匹配 Google Drive 的链接格式
    const match = inputLink.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);

    if (match && match[1]) {
        // 构建转换后的链接
        const fileId = match[1];
        const convertedLink = `https://drive.usercontent.google.com/download?id=${fileId}`;

        // 复制链接到剪贴板
        const tempInput = document.createElement("input");
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = convertedLink;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        // 显示转换后的链接
        const outputLink = document.getElementById("outputLink");
        outputLink.textContent = "Converted Link (copied to clipboard): " + convertedLink;
        outputLink.style.color = "blue";
        outputLink.style.fontWeight = "bold";

        // 显示浮动提示窗口
        const toast = document.getElementById("toast");
        toast.style.display = "block";
        
        // 自动隐藏提示窗口
        setTimeout(function() {
            toast.style.display = "none";
        }, 2000); // 2秒后自动隐藏
    } else {
        // 链接格式不匹配的错误消息
        alert("Invalid Google Drive link format. Please enter a valid link.");
    }
}

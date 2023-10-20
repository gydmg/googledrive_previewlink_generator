function convertLink() {
    // 获取用户输入的链接
    const inputLink = document.getElementById("driveLink").value;

    // 正则表达式匹配 Google Drive 的链接格式
    const match = inputLink.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);

    if (match && match[1]) {
        // 构建转换后的链接
        const fileId = match[1];
        const convertedLink = `https://drive.google.com/uc?id=${fileId}`;
        
        // 显示转换后的链接
        const outputLink = document.getElementById("outputLink");
        outputLink.textContent = "Converted Link: " + convertedLink;
        outputLink.style.color = "blue";
        outputLink.style.fontWeight = "bold";
    } else {
        // 链接格式不匹配的错误消息
        alert("Invalid Google Drive link format. Please enter a valid link.");
    }
}

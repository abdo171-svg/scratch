document.getElementById("whatsapp-button").addEventListener("click", function() {
    var phoneNumber = "20 111 182 3811"; // رقم الهاتف مع رمز الدولة بدون + أو مسافات
    var message = "مرحبًا، أحتاج إلى معرفة المزيد عن خدماتك."; // الرسالة المخصصة

    // تحويل الرسالة إلى تنسيق URL encoding
    var encodedMessage = encodeURIComponent(message);

    // إنشاء رابط واتساب
    var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    // فتح رابط واتساب
    window.open(whatsappLink, "_blank");
});

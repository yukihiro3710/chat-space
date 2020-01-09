$(function(){ 
  var buildHTML = function(message) {
  var image = message.image ? `<img src=${message.image}>` :"";
  var html =`<div class="message" data-message-id=${message.id}>
    <div class="upper-message">
      <div class="upper-message__user-name">
        ${message.user_name}
      </div>
         <div class="upper-message__date">
            ${message.created_at}
         </div>
    </div>
   <div class="lower-message">
      <p class="lower-message__content">
        ${message.content}
      </p>
    </div>
     ${image}
    </div>`
      return html;
  };
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);      
      $('form')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('.submit-btn').prop('disabled',false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
    return false;
  });
  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
       var insertHTML = '';
       $.each(messages, function(i, message) {
         insertHTML += buildHTML(message)
       });
       $('.chat-main__message-list').append(insertHTML);
       $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      //  $("#new_message")[0].reset();
      //  $(".submit-btn").prop("disabled", false);
      }
     })
    .fail(function() {
      alert('error');
    });
  };
    if (document.location.href.match(/\/groups\/\d+\/messages/)) {
      setInterval(reloadMessages, 7000);
    }
});



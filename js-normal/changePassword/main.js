if (PasswordValue === confirmPassword) {
  if (PasswordValue !== newPassword) {
    if (8 <= newPassword.length) {
      PasswordValue = newPassword;
      PasswordValue.textContent = PasswordValue;
      nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
      alert(`新しいパスワードは ${PasswordValue}です`);
    } else {
      alert('8文字以上にして下さい。');
    }
  } else {
    alert('同じパスワードはつかえません！');
  }
} else {
  alert('古いパスワードが間違っています！');an}
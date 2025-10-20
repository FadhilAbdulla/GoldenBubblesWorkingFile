# Email Formatting Guide

This guide shows you how to use the plain text email formatting system in your Golden Bubbles backend.

## Basic Formatting Syntax

### Bold Text
```
**This text will be bold**
```
Result: **This text will be bold**

### Italic Text
```
*This text will be italic*
```
Result: *This text will be italic*

### Colored Text
```
[color:red]This text will be red[/color]
[color:#007bff]This text will be blue[/color]
[color:green]This text will be green[/color]
```

### Background Colors
```
{bg:yellow}This text has yellow background{/bg}
{bg:#f8d7da}This text has light red background{/bg}
```

### Font Size
```
[size:18]This text is 18px[/size]
[size:24]This text is 24px[/size]
```

### Links
```
[link:https://goldenbubbles.com]Visit our website[/link]
```

### Line Breaks
Simply use regular line breaks in your text:
```
Line 1
Line 2
Line 3
```

## Available Email Methods

### 1. Formatted Text Email
```typescript
await this.mailService.sendFormattedTextEmail(
  'user@example.com',
  'Subject',
  'Hello **John**, your [color:green]application[/color] has been {bg:yellow}approved{/bg}!'
);
```

### 2. Styled Text Email
```typescript
await this.mailService.sendStyledTextEmail(
  'user@example.com',
  'Subject',
  'Your custom content here',
  {
    backgroundColor: '#f8f9fa',
    textColor: '#333',
    fontFamily: 'Georgia, serif',
    fontSize: '16px'
  }
);
```

### 3. Notification Email
```typescript
await this.mailService.sendNotificationEmail(
  'user@example.com',
  'Important Update',
  'Your documents have been processed successfully.',
  'success' // 'success', 'warning', 'error', 'info'
);
```

### 4. Plain HTML Email
```typescript
await this.mailService.sendHtmlEmail(
  'user@example.com',
  'Subject',
  '<h1>Custom HTML</h1><p>Your content here</p>'
);
```

## Test API Endpoints

### Test Formatted Text
```bash
POST /mail/test-formatted-text
{
  "email": "test@example.com",
  "subject": "Test Formatted Email",
  "content": "Hello **John**!\n\nYour [color:green]account[/color] has been {bg:yellow}activated{/bg}.\n\n[link:https://example.com]Click here to login[/link]"
}
```

### Test Styled Text
```bash
POST /mail/test-styled-text
{
  "email": "test@example.com",
  "subject": "Test Styled Email",
  "content": "This is custom styled content",
  "backgroundColor": "#f0f8ff",
  "textColor": "#2c3e50",
  "fontFamily": "Georgia, serif",
  "fontSize": "16px"
}
```

### Test Notification
```bash
POST /mail/test-notification
{
  "email": "test@example.com",
  "subject": "Test Notification",
  "message": "Your operation completed successfully!",
  "type": "success"
}
```

## Real-World Examples

### Document Upload Notification
```typescript
const message = `Hello **${firstName}**!

Your documents have been uploaded successfully:
• {bg:lightgreen}Passport{/bg}
• {bg:lightgreen}Emirates ID{/bg}  
• {bg:lightgreen}Proof of Address{/bg}

[color:blue]Status: Under Review[/color]

We will notify you within 2-3 business days.

[link:https://portal.goldenbubbles.com]Check Status[/link]`;

await this.mailService.sendFormattedTextEmail(
  user.email,
  'Documents Uploaded Successfully',
  message
);
```

### Account Verification
```typescript
const message = `Welcome **${firstName}**!

Your account has been [color:green]successfully created[/color].

[size:18]Next Steps:[/size]
1. Verify your email address
2. Complete your profile
3. Upload required documents

{bg:lightyellow}Important: Please verify your email within 24 hours.{/bg}

[link:${verificationLink}]Verify Email Address[/link]`;

await this.mailService.sendFormattedTextEmail(
  user.email,
  'Welcome to Golden Bubbles',
  message
);
```

### System Alert
```typescript
await this.mailService.sendNotificationEmail(
  admin.email,
  'System Alert: High CPU Usage',
  'Server CPU usage has exceeded 85% for the last 10 minutes.\nPlease check the server status.',
  'warning'
);
```

## Color Options

### Common Colors
- `red`, `green`, `blue`, `yellow`, `orange`, `purple`, `pink`, `brown`
- `black`, `white`, `gray`, `lightgray`, `darkgray`

### Hex Colors
- `#ff0000` (red)
- `#00ff00` (green)  
- `#0000ff` (blue)
- `#007bff` (bootstrap blue)
- `#28a745` (bootstrap green)
- `#ffc107` (bootstrap yellow)
- `#dc3545` (bootstrap red)

### Background Colors
- `lightgreen`, `lightblue`, `lightyellow`, `lightgray`
- Any hex color: `#f8f9fa`, `#e9ecef`, etc.

This system gives you full control over email formatting while keeping the syntax simple and readable!

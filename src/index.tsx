
import CMS from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";
import uploadcare from "netlify-cms-media-library-uploadcare";
import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import { BlogPostPreview } from "./pages/BlogPost";
import { IndexPagePreview } from "./pages/IndexPage";

import {
    Layout,
    Menu,
    DatePicker,
    Space,
    Typography,
    Skeleton,
    Avatar,
    Dropdown,
} from 'antd';
import useSWR from 'swr';
import moment, { Moment } from 'moment';

import { Chart } from './Chart';
import { prepareData, getInitials } from './utils';
import { FormComponent } from './Form';
import { Cards } from './Cards';

import './App.scss';
import 'antd/dist/antd.css';
import { LoginForm } from './LoginForm';
import logo from './img/logo.png';
import styled from '@emotion/styled';
import { useUser } from './hooks/useUser';
import { useLevels } from './hooks/useLevels';
import { useSubscriptions } from './hooks/useSubscriptions';

const CSSInjector = (props: any) => {
    const iframe = document.getElementsByTagName('iframe')[0];
    if (iframe) {
        return (
            <StyleSheetManager target={iframe.contentDocument!.head}>
                {props.children}
            </StyleSheetManager>
        )
    }
    return null;
}

CMS.registerPreviewTemplate('index-cs', (props: any) => (
    <CSSInjector>
        <IndexPagePreview {...props} />
    </CSSInjector>
))

CMS.registerPreviewTemplate('index-en', (props: any) => (
    <CSSInjector>
        <IndexPagePreview {...props} />
    </CSSInjector>
))

CMS.registerPreviewTemplate('blog', (props: any) => (
    <CSSInjector>
        <BlogPostPreview {...props} />
    </CSSInjector>
))

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);


const { Header, Content, Footer } = Layout;

const Logo = styled.img`
    width: 54px;
    height: auto;
    float: left;
    margin: 5px 0;
`;

const AvaText = styled.span`
    font-weight: bold;
`;

function App() {
    const { data: date, mutate: mutateDate } = useSWR('date', {
        initialData: moment(),
    });

    const { token, isAuthorizing, clearToken, user } = useUser();
    const { data: levels, isLoading } = useLevels();

    const { isSubscribed, subscribe } = useSubscriptions(token);

    return (
        <Layout className="layout">
            <Header>
                <Logo src={logo} />
                {token && (
                    <Dropdown
                        overlay={
                            <Menu>
                                <Menu.Item onClick={subscribe}>
                                    {isSubscribed
                                        ? 'Unsubscribe from notifications'
                                        : 'Subscribe to notifications'}
                                </Menu.Item>
                                <Menu.Item onClick={clearToken}>
                                    Logout
                                </Menu.Item>
                            </Menu>
                        }
                    >
                        <Avatar
                            size={44}
                            style={{ float: 'right', margin: '10px 0' }}
                        >
                            <AvaText>{getInitials(user?.name || '')}</AvaText>
                        </Avatar>
                    </Dropdown>
                )}
            </Header>
            <Content>
                <div className="site-layout-content">
                    <Typography.Title level={2}>
                        Hawkins levels tracking app
                    </Typography.Title>
                    {isAuthorizing && <Skeleton active />}
                    {!token && !isAuthorizing && <LoginForm />}
                    {token && (
                        <>
                            <Typography.Paragraph>
                                Hello {user?.name}, how you are doing?
                            </Typography.Paragraph>
                            <FormComponent />

                            <Typography.Title level={3}>
                                Statistics
                            </Typography.Title>
                            <Space style={{ marginLeft: 20, marginBottom: 24 }}>
                                Select date:{' '}
                                <DatePicker
                                    value={date}
                                    onChange={(v) => mutateDate(v as Moment)}
                                />
                            </Space>
                            <div style={{ width: '100%', height: 300 }}>
                                {isLoading ? (
                                    <Skeleton active />
                                ) : (
                                    <Chart data={prepareData(levels)} />
                                )}
                            </div>
                            <Cards />
                        </>
                    )}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Pavel Uvarov App</Footer>
        </Layout>
    );
}

